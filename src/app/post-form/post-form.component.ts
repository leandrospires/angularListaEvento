import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  post={name: "Leandro", email: "leandro@porto", body: "Meu texto..."}

  postForm: FormGroup=new FormGroup({name:new FormControl("leandro", [Validators.required]),
                                email:new FormControl("leandro@porto.com",
                                    [Validators.required, Validators.email]),
                                body:new FormControl("Texto ....", [Validators.required])
  })


  constructor(private service: MyServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onChanges(evento: any): void {
    console.log(evento);
    console.log(this.post);

  }

  submit(valor: any): void {
    console.log(valor);
    console.log(this.post);
    console.log(this.route);
    console.log(this.postForm.value);
    
    // Reactive
    this.service.savePost( parseInt (this.route.snapshot.params.id), this.postForm.value ).subscribe(()=>alert("Salvo com Sucesso!"));
    
    // Template Form Driven
    //this.service.savePost( parseInt (this.route.snapshot.params.id), this.post ).subscribe(()=>alert("Salvo com Sucesso!"));


  }

}
