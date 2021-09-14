import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message: string = "";
  element: any;

  constructor(public chatService : ChatService,
              public authService: AuthService) {

    this.chatService.loadMessage()
                    .subscribe( ()=>{

                      setTimeout(() => {
                        this.element.scrollTop = this.element.scrollHeight;
                      }, 20);
                      
                    });
                   
   }

  ngOnInit(): void {
    this.element = document.getElementById('msgHistory');
    
  }

  send_menssage(){

    if(this.message.length === 0){
      return;
    }

    this.chatService.addMessage(this.message)
                    .then(()=> this.message = "")
                    .catch((err)=> console.error("Error enviar mensaje!", err))
  }

  
}
