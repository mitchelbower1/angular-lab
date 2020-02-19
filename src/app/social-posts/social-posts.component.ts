import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  show: boolean = false;
  listOfPosts: Post[] = [
    { title: "lab", thought: "really wish i could get this lab to work" },
    { title: "npm", thought: "BUNK" }
  ];
  constructor() {}

  ngOnInit(): void {}
  onSubmit(post: Post) {
    this.listOfPosts.unshift(post);
  }
  onDelete(index: number) {
    this.listOfPosts.splice(index, 1);
  }
  showForm() {
    this.show = !this.show;
  }
}
