import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sentry-issue-5417';

  forceAsyncCrash() {
    setTimeout(() => {
      const c: any = null;
      const v = c.asyncCrash;
    }, 1000);
  }

  forceSyncCrash() {
    const c: any = null;
    const v = c.syncCrash;
  }
}
