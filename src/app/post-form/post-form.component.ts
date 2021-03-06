import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "../interfaces/post";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  addPost(form: NgForm) {
    this.submitted.emit(form.value);
  }
}
