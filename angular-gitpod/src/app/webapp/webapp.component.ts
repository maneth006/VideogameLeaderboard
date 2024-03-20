import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-webapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './webapp.component.html',
  styleUrl: './webapp.component.css'
})
export class WebappComponent {
  persone = [
    
    {Nome_Utente: "Bugha", Nazionalita: "USA", eta: "21", ruolo: "Giocatore professionista Battle Royale", colore: "rgb(255, 255, 0)", img: "assets/img/Bugha.png", link: "https://fortnite-esports.fandom.com/wiki/Bugha"},
 
    {Nome_Utente: "Queasy", Nazionalita: "Serbia", eta: "21", ruolo: "Giocatore professionista Battle Royale", colore: "rgb(255, 255, 0)", img: "assets/img/Queasy.png", link: "https://fortnite-esports.fandom.com/wiki/Queasy"},
 
    {Nome_Utente: "Veno", Nazionalita: "England", eta: "19", ruolo: "Giocatore professionista Battle Royale", colore: "rgb(255, 255, 0)", img: "assets/img/Veno.png", link: "https://fortnite-esports.fandom.com/wiki/Veno"},

    {Nome_Utente: "Setty", Nazionalita: "Poland", eta: "20", ruolo: "Giocatore professionista Battle Royale", colore: "rgb(255, 255, 0)", img: "assets/img/Setty.png", link: "https://fortnite-esports.fandom.com/wiki/Setty"},

    {Nome_Utente: "Kami", Nazionalita: "Poland", eta: "19", ruolo: "Giocatore professionista Battle Royale", colore: "rgb(255, 255, 0)", img: "assets/img/Kami.png", link: "https://fortnite-esports.fandom.com/wiki/Kami"},
 
    {Nome_Utente: "Mongraal", Nazionalita: "England", eta: "19", ruolo: "Giocatore professionista Battle Royale", colore: "rgb(255, 255, 0)", img: "assets/img/Mongraal.png", link: "https://fortnite-esports.fandom.com/wiki/Mongraal"},
 
    {Nome_Utente: "Malibuca", Nazionalita: "Russia", eta: "18", ruolo: "Giocatore professionista Battle Royale", colore: "rgb(255, 255, 0)", img: "assets/img/Malibuca.png", link: "https://fortnite-esports.fandom.com/wiki/Malibuca"},

    {Nome_Utente: "Merstach", Nazionalita: "Latvia", eta: "16", ruolo: "Giocatore professionista Battle Royale", colore: "rgb(255, 255, 0)", img: "assets/img/Merstach.png", link: "https://fortnite-esports.fandom.com/wiki/Merstach"},
 
    {Nome_Utente: "MrSavage", Nazionalita: "Norway", eta: "19", ruolo: "Giocatore professionista Battle Royale", colore: "rgb(255, 255, 0)", img: "assets/img/MrSavage.png", link: "https://fortnite-esports.fandom.com/wiki/MrSavage"},

    {Nome_Utente: "Clix", Nazionalita: "USA", eta: "19", ruolo: "Giocatore professionista Battle Royale", colore: "rgb(255, 255, 0)", img: "assets/img/Clix.png", link: "https://fortnite-esports.fandom.com/wiki/Clix"},
 
  ]
}
