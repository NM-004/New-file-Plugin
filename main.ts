import {Plugin} from 'obsidian';

export default class New_File extends Plugin{
	async onload(){
		this.addRibbonIcon('file-key','New File',async() =>{
			const New_File = 'New File.md';
			const NewFile = await this.app.vault.create(New_File,"");

			const leaf = this.app.workspace.getLeaf();
			await leaf.openFile(NewFile);
		});
	}
}