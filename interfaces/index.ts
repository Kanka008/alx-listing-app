// Shape of data for the Card component
export interface CardProps {
  title: string;         // Must be a string
  description: string;   // Must be a string
  imageUrl?: string;     // Optional (because of '?')
}

// Shape of data for the Button component
export interface ButtonProps {
  text: string;         // Button label (e.g., "Book Now")
  onClick: () => void;  // Function that runs when clicked
  variant?: 'primary' | 'secondary';  // Optional (default: 'primary')
}