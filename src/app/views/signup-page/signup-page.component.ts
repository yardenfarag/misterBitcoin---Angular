import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { UserMsgService } from 'src/app/services/user-msg.service';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  form!: FormGroup
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userMsgService: UserMsgService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.minLength(3)]
    })
  }

  user!:User

  ngOnInit(): void {
    this.user = this.userService.getUser()
  }
  onSignUp() {
    if (!this.form.value.name){
      this.userMsgService.setMsg('Name field is required!')
      return
    } 
    this.userService.signup(this.form.value.name)
    this.router.navigateByUrl('/user')
    
  }

  Logout() {
    this.userService.logout()
    this.user = this.userService.getUser()
  }
}
