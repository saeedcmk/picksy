import { LucideX } from "lucide-react";
import { Button } from "@/components/ui/button";

function RandomChoiceList({
	choices,
	onRemove,
}: {
	choices: string[];
	onRemove: (choice: string) => void;
}) {
	return (
		choices.length > 0 && (
			<ul className="w-full max-w-md space-y-2">
				{choices.map((choice, index) => (
					<li key={index} className="flex gap-3 pb-2 not-last:border-b">
						<div className="flex size-8 shrink-0 items-center justify-center rounded-lg border">
							{index + 1}
						</div>
						<div className="grow py-1">{choice}</div>
						<div className="w-fit shrink-0">
							<Button
								size="icon-sm"
								type="button"
								variant="ghost"
								onClick={() => onRemove(choice)}
							>
								<LucideX />
							</Button>
						</div>
					</li>
				))}
			</ul>
		)
	);
}

export { RandomChoiceList };
