import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-captcha',
  templateUrl: './card-captcha.component.html',
  styleUrls: ['./card-captcha.component.css']
})
export class CardCaptchaComponent implements OnInit {

  num: string = "0123456789"
  caractesEspeciais: string = " @#$%¨&*()_+-*/?:;|=''``"
  caractes: string = "abcdefghijklmnopqrstuvwxyz"

  valor: string = ''
  resultado: string = ''

  constructor() { }

  resp: string = ''

  gerarCaracteres() {    
    let concat = this.num+this.caractes+this.caractesEspeciais
    let c = []
    for(let i = 0; i <= 8; i++){
      c.push(concat[(Math.floor(Math.random()* concat.length))])
    }
      this.resp = `${c.join('')}`
  }

  validarCampos(){
    if(this.valor == this.resp && this.valor != ''){
      this.resultado = "Caracteres validados com sucesso"
      this.valor = ''
      this.gerarCaracteres()
    }else{
      this.resultado = "Caracteres inválidos"
    }
  }

  ngOnInit(): void {
  }

}
