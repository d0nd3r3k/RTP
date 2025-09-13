# Vera Molnar Inspired Generative Art

A p5.js implementation inspired by the work of Vera Molnar, the pioneering computer artist known for her exploration of controlled randomness and systematic approaches to art generation.

## About

This program generates abstract art pieces using controlled randomness, creating compositions of nested squares with varying colors and sizes. The algorithm creates an 8x8 grid of square compositions, each containing multiple concentric squares with randomized dimensions and colors from a carefully curated palette.

### Inspiration

Vera Molnar (1924-2023) was a Hungarian-French artist and a pioneer of computer art. She was one of the first artists to use computers in her creative process, exploring the relationship between order and chaos, systematic approaches and controlled randomness. This project pays homage to her methodology of using algorithmic processes to create visually compelling abstract compositions.

## Example Output

![Vera Molnar Inspired Art](https://github.com/d0nd3r3k/RTP/blob/master/images/vera_molnar_3.png)

## Features

- **Controlled Randomness**: Each square's size and color is randomly selected within defined parameters
- **Curated Color Palette**: Uses a carefully selected color scheme with multiple tones
- **Grid-based Composition**: Creates an organized 8x8 grid structure
- **Nested Squares**: Each cell contains multiple concentric squares of varying sizes
- **Static Generation**: Creates a single composition per run (no animation)

## Technical Details

- **Canvas Size**: 700x700 pixels
- **Grid**: 8x8 squares with 84px spacing
- **Colors**: 15-color palette including background variations
- **Square Variations**: Random size reduction between 2-20 pixels per iteration
- **Stroke Weight**: 2.2px for all elements

## Quick Start

### Prerequisites

- A modern web browser
- Python 3 (for local server)

### Running the Demo

1. Clone or download this repository
2. Navigate to the project directory in your terminal
3. Start a local HTTP server:
   ```bash
   python3 -m http.server 8080
   ```
4. Open your web browser and go to:
   ```
   http://localhost:8080/Vera_Molnar/
   ```

## How It Works

1. **Setup**: Creates a 700x700 canvas with no fill and centered rectangle mode
2. **Grid Generation**: Iterates through an 8x8 grid with 84px spacing
3. **Square Creation**: For each grid position:
   - Starts with an 80px square
   - Randomly reduces size by 2-20 pixels each iteration
   - Randomly selects colors from the palette
   - Draws concentric squares until size reaches near zero
4. **Color Selection**: Uses a 15-color array with multiple background colors for variation

## Customization

You can modify the following parameters in `sketch.js`:

- **Canvas size**: Change `createCanvas(700, 700)` dimensions
- **Grid spacing**: Modify the increment values in the nested loops (currently 84)
- **Color palette**: Update the `color_arr` array with your preferred RGB values
- **Size variation**: Adjust the `random(2, 20)` range for different square size variations
- **Stroke weight**: Change `strokeWeight(2.2)` for thicker or thinner lines

## Dependencies

- [p5.js](https://p5js.org/) - JavaScript library for creative coding

## License

This project is open source. Feel free to use, modify, and distribute as needed.

## Acknowledgments

- Inspired by the pioneering work of Vera Molnar in computer-generated art
- Built with p5.js creative coding framework
