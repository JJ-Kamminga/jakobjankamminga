#!/bin/bash

# Check if correct number of arguments provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <directory> <max-width>"
    echo "Example: $0 /path/to/images 1200"
    exit 1
fi

# Assign arguments to variables
INPUT_DIR="$1"
MAX_WIDTH="$2"

# Check if input directory exists
if [ ! -d "$INPUT_DIR" ]; then
    echo "Error: Directory '$INPUT_DIR' does not exist"
    exit 1
fi

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick is not installed"
    exit 1
fi

# Create output directory
OUTPUT_DIR="public/blog"
mkdir -p "$OUTPUT_DIR"

echo "Processing images from: $INPUT_DIR"
echo "Output directory: $OUTPUT_DIR"
echo "Max width: ${MAX_WIDTH}px"
echo ""

# Counter for processed files
COUNT=0

# Process each image file in the directory
for img in "$INPUT_DIR"/*; do
    # Check if file exists (handles case where no files match)
    if [ ! -f "$img" ]; then
        continue
    fi

    # Get the filename without path
    filename=$(basename "$img")

    # Check if it's an image file by trying to identify it
    if identify "$img" &> /dev/null; then
        echo "Processing: $filename"

        # Resize to max width, maintain aspect ratio (no crop)
        # The '>' flag only resizes if the image is larger than max width
        convert "$img" \
            -resize "${MAX_WIDTH}x>" \
            +repage \
            "$OUTPUT_DIR/$filename"

        if [ $? -eq 0 ]; then
            echo "  ✓ Successfully processed"
            ((COUNT++))
        else
            echo "  ✗ Failed to process"
        fi
    else
        echo "Skipping non-image file: $filename"
    fi
done

echo ""
echo "Done! Processed $COUNT images"
echo "Output saved to: $OUTPUT_DIR"
