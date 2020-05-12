import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service notifications;
  
  constructor(owner, args) {
    super(owner, args);
    this.notifications.warning(`
      <details>
        <summary>Won't expand</summary>
        It would be nice to see this part.
      </details>
`, {
      htmlContent: true,
    })
  }
}
