import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  text: string = 'Olá, sou a Luiza! Vou te ajudar a abrir sua loja em nosso marketplace. Qual o seu nome completo?';
  chat:FormGroup;
  loading: boolean = true;

  constructor(public navCtrl: NavController, private fb: FormBuilder, private tts: TextToSpeech) {}

  ngOnInit(){
    this.sayText();
    this.criarFormulario();
  }

  criarFormulario(){
    this.chat = this.fb.group({
      texto: ['', Validators.required]
    })
  }

  async sayText():Promise<any>{
    try{
      this.loading = false;
      await this.speak();
    }
    catch(e){
      console.log(e);
    }

}

  speak(){
    this.tts.speak(
      {
        text: this.text,
        locale: 'pt-BT'
      }
    );
    
  }
}