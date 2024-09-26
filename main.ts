import { Plugin } from 'obsidian';

export default class NewFilePlugin extends Plugin {
	async onload() {
		const date = new Date();
		// Ribbon icon to create a new file with a default name
		this.addRibbonIcon('file-key', 'New File', async () => {
			const newFileName = 'New File.md';
			const newFile = await this.app.vault.create(newFileName, "");

			const leaf = this.app.workspace.getLeaf();
			await leaf.openFile(newFile);
		});

		// Ribbon icon to create a new file with the current date and time
		this.addRibbonIcon('calendar-plus', 'New Dated File', async () => {
			const date = new Date();
			const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
			const formattedTime = `${String(date.getHours()).padStart(2, '0')}-${String(date.getMinutes()).padStart(2, '0')}`;
			const newDatedFileName = `Note_${formattedDate}_${formattedTime}.md`;
			const newDatedFile = await this.app.vault.create(newDatedFileName, "");

			const leaf = this.app.workspace.getLeaf();
			await leaf.openFile(newDatedFile);
		});
	}
}
