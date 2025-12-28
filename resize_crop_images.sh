#!/bin/bash

# Check if correct number of arguments provided
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <directory> <width> <height> "
    echo "Example: $0 /path/to/images 1200 800"
    exit 1
fi

# Assign arguments to variables
INPUT_DIR="$1"
DESIRED_WIDTH="$3"
DESIRED_HEIGHT="$2"

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
OUTPUT_DIR="public/${DESIRED_WIDTH}x${DESIRED_HEIGHT}"
mkdir -p "$OUTPUT_DIR"

echo "Processing images from: $INPUT_DIR"
echo "Output directory: $OUTPUT_DIR"
echo "Target dimensions: ${DESIRED_HEIGHT}x${DESIRED_WIDTH}"
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
        
        # Resize to match width, then crop height from center
        convert "$img" \
            -resize "${DESIRED_WIDTH}x" \
            -gravity center \
            -crop "${DESIRED_WIDTH}x${DESIRED_HEIGHT}+0+0" \
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
