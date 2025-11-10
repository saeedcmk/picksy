import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RandomChoiceAdd } from "./random-choice-add";
import { RandomChoiceList } from "./random-choice-list";

function RandomChoice() {
	const [choices, setChoices] = useState<string[]>([]);
	const [selected, setSelected] = useState<string | null>(null);

	const addChoice = (choice: string) => {
		setChoices((prev) => [...prev, choice]);
		setSelected(null);
	};

	const removeChoice = (choice: string) => {
		setChoices((prev) => prev.filter((c) => c !== choice));
		setSelected(null);
	};

	const pickRandom = () => {
		if (choices.length > 0) {
			const random = choices[Math.floor(Math.random() * choices.length)];
			setSelected(random);
		}
	};

	return (
		<div className="flex w-full max-w-md flex-col items-center justify-center gap-6 p-4">
			<h1 className="text-3xl font-semibold">Random Choice</h1>

			<RandomChoiceAdd onAdd={addChoice} />

			<RandomChoiceList choices={choices} onRemove={removeChoice} />

			{choices.length > 0 && (
				<>
					<Button
						className="w-full"
						disabled={choices.length === 0}
						variant="default"
						onClick={pickRandom}
					>
						Pick Random
					</Button>

					{selected && (
						<div className="text-xl font-medium text-green-600 dark:text-green-400">
							🎉 {selected}
						</div>
					)}
				</>
			)}
		</div>
	);
}

export { RandomChoice };
