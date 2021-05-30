import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { map }        from 'rxjs/operators'
import { Router }     from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();


  constructor(private http: HttpClient, private router: Router){}

  getPosts() {
    //return [...this.posts];
    this.http.get<{message: string; posts: any}>(
      "http://192.168.8.130:3000/api/posts"
    ).pipe(map((hPost)=> {
      return hPost.posts.map(post => {
        return {
          title: post.title,
          content: post.content,
          id: post._id
        }
      })
    }))
    .subscribe((transformedPost) => {
      this.posts = transformedPost;
      this.postUpdated.next([...this.posts]);
    })
  }



  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {id: null, title: title, content: content};
    this.http.post<{ message: string, postId: string}>("http://192.168.8.130:3000/api/posts", post)
      .subscribe(hPost => {
        const id = hPost.postId;
        post.id = id;
        this.posts.push(post); // insert the new post, into the posts array defined above
        this.postUpdated.next([...this.posts]);
        this.router.navigate(['/']);
    });
  }

  deletePost(postId: string){
    // Code to send database
    this.http.delete("http://localhost:3000/api/posts/" + postId)
    .subscribe(() => {
      const updatedPosts = this.posts.filter(post => post.id !== postId);
      this.posts = updatedPosts;
      this.postUpdated.next([...this.posts]);
      console.log("Deleted");
    });
  }
}
