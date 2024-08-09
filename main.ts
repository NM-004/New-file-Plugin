import {Plugin} from 'obsidian';

export default class New_File extends Plugin{
	async onload(){
		this.addRibbonIcon('file-key','New File',async() =>{
			const New_File = 'New File.md';
			await this.app.vault.create(New_File,"");
		});
	}
}