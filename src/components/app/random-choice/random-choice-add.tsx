import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function RandomChoiceAdd({ onAdd }: { onAdd: (choice: string) => void }) {
	const [choice, setChoice] = useState<string>("");

	const addChoice = () => {
		const sanitizedChoice = choice.trim();
		if (sanitizedChoice) {
			onAdd(sanitizedChoice);
			setChoice("");
		}
	};

	return (
		<div className="flex w-full max-w-md gap-2">
			<Input
				placeholder="Enter a choice..."
				value={choice}
				onChange={(event) => setChoice(event.target.value)}
				onKeyDown={(event) => event.key === "Enter" && addChoice()}
			/>

			<Button
				className="min-w-20 shrink-0"
				variant="outline"
				onClick={addChoice}
			>
				Add
			</Button>
		</div>
	);
}

export { RandomChoiceAdd };
