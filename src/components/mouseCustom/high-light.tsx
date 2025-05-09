"use client";
import useSpotlightEffect from "@/components/mouseCustom/use-spot-light";
import { HTMLAttributes } from "react";

// Define an interface for the spotlight configuration
interface SpotlightConfig {
	spotlightSize?: number;
	spotlightIntensity?: number;
	fadeSpeed?: number;
	glowColor?: string;
	pulseSpeed?: number;
}

// Combine props with potential HTML canvas attributes
interface SpotlightCursorProps extends HTMLAttributes<HTMLCanvasElement> {
	config?: SpotlightConfig;
}

const SpotlightCursor = ({
	config = {},
	className,
	...rest
}: SpotlightCursorProps) => {
	// Provide default configuration if not specified

	const canvasRef = useSpotlightEffect(config);

	return (
		<canvas
			ref={canvasRef}
			className={`fixed top-0 left-0 pointer-events-none z-[9999] w-full h-full ${className}`}
			{...rest}
		/>
	);
};

export default SpotlightCursor;
