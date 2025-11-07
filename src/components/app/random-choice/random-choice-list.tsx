function RandomChoiceList({ choices }: { choices: string[] }) {
	return (
		choices.length > 0 && (
			<ul className="w-full max-w-md space-y-2">
				{choices.map((c, i) => (
					<li key={i} className="flex gap-3 pb-2 not-last:border-b">
						<div className="flex size-8 shrink-0 items-center justify-center rounded-lg border">
							{i + 1}
						</div>
						<div className="py-1">{c}</div>
					</li>
				))}
			</ul>
		)
	);
}

export { RandomChoiceList };
