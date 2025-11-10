import { RandomChoice } from "./components/app/random-choice/random-choice";

function App() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white text-neutral-900 transition-colors dark:bg-neutral-900 dark:text-neutral-100">
			<div className="space-y-2 text-center">
				<h1
					className="text-4xl font-semibold tracking-widest"
					style={{ fontVariant: "small-caps" }}
				>
					Picksy
				</h1>
				<p className="text-muted-foreground">
					Your decision buddy. Helps you decide — when you can’t choose, it
					will.
				</p>
			</div>

			<RandomChoice />
		</div>
	);
}

export default App;
