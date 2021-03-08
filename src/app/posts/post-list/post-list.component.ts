import { Component, OnInit, OnDestroy } from "@angular/core";


import { Post }         from "../post.model";
import { PostsService } from "../posts.service";
import { Subscription, VirtualTimeScheduler } from 'rxjs';
import { AuthService }  from '../../auth/auth.service';

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: "First Post", content: "This is the first post's content" },
  //   { title: "Second Post", content: "This is the second post's content" },
  //   { title: "Third Post", content: "This is the third post's content" }
  // ];
  posts: Post[] = [];
  isLoading = false;
  userIsAuthenticated = false;
  //private postsSub: Subscription;

  private postSub = new Subscription();
  private authSub = new Subscription();

  constructor(private postsService: PostsService, private authService: AuthService) {}

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
      this.userIsAuthenticated = this.authService.getIsAuthenticated()
      this.authSub = this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      })
  }

  onDelete(postId: string){

  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
    this.authSub.unsubscribe();
  }
}
