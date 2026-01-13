#!/bin/bash

# Universal blog image resizing script
# Usage for thumbnails: bash resize_blog_images.sh images/blog crop 600 400
# Usage for content:    bash resize_blog_images.sh images/blog resize 600 1200 1600

if [ "$#" -lt 3 ]; then
    echo "Usage:"
    echo "  Crop mode:   $0 <directory> crop <width> <height>"
    echo "  Resize mode: $0 <directory> resize <width1> [width2] [width3] ..."
    echo ""
    echo "Examples:"
    echo "  $0 images/blog crop 600 400"
    echo "  $0 images/blog resize 600 1200 1600"
    exit 1
fi

INPUT_DIR="$1"
MODE="$2"
shift 2  # Remove first two arguments, leaving widths/dimensions

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

COUNT=0

if [ "$MODE" = "crop" ]; then
    # CROP MODE: Fixed dimensions with center crop
    if [ "$#" -ne 2 ]; then
        echo "Error: Crop mode requires exactly 2 arguments (width height)"
        exit 1
    fi

    WIDTH="$1"
    HEIGHT="$2"
    OUTPUT_DIR="public/${WIDTH}x${HEIGHT}"
    mkdir -p "$OUTPUT_DIR"

    echo "Mode: CROP to ${WIDTH}x${HEIGHT}"
    echo "Output: $OUTPUT_DIR"
    echo ""

    for img in "$INPUT_DIR"/*; do
        if [ ! -f "$img" ]; then continue; fi
        filename=$(basename "$img")

        if identify "$img" &> /dev/null; then
            echo "Processing: $filename"

            convert "$img" \
                -resize "${WIDTH}x" \
                -gravity center \
                -crop "${WIDTH}x${HEIGHT}+0+0" \
                +repage \
                "$OUTPUT_DIR/$filename"

            if [ $? -eq 0 ]; then
                echo "  ✓ Cropped to ${WIDTH}x${HEIGHT}"
                ((COUNT++))
            else
                echo "  ✗ Failed"
            fi
        fi
    done

elif [ "$MODE" = "resize" ]; then
    # RESIZE MODE: Multiple widths, preserve aspect ratio
    if [ "$#" -lt 1 ]; then
        echo "Error: Resize mode requires at least 1 width"
        exit 1
    fi

    WIDTHS=("$@")
    echo "Mode: RESIZE to widths: ${WIDTHS[*]}"
    echo ""

    for width in "${WIDTHS[@]}"; do
        OUTPUT_DIR="public/blog-${width}"
        mkdir -p "$OUTPUT_DIR"
        echo "Processing width: ${width}px → $OUTPUT_DIR"

        for img in "$INPUT_DIR"/*; do
            if [ ! -f "$img" ]; then continue; fi
            filename=$(basename "$img")

            if identify "$img" &> /dev/null; then
                echo "  Processing: $filename"

                convert "$img" \
                    -resize "${width}x>" \
                    +repage \
                    "$OUTPUT_DIR/$filename"

                if [ $? -eq 0 ]; then
                    ((COUNT++))
                fi
            fi
        done
        echo ""
    done

else
    echo "Error: Mode must be 'crop' or 'resize'"
    exit 1
fi

echo "Done! Processed $COUNT image(s)"
