import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';

export default class ApplicationController extends Controller {
  @service notifications;
  
  constructor(owner, args) {
    super(owner, args);
    this.notifications.warning(`
      <details>
        <summary>Will expand now</summary>
        It would be nice to see this part.
      </details>
`, {
      htmlContent: true,
    });
    scheduleOnce('afterRender', () => {
      console.log('hacking click handler');
      document.querySelector('.c-notification details').addEventListener('click', function(e) {
        e.stopPropagation();
      })
    });
  }
}
