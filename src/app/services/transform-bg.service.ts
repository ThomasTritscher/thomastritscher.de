import { Injectable } from '@angular/core';
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from 'node:constants';

@Injectable({
  providedIn: 'root'
})
export class TransformBGService {

  valueBg = 'translate(' + -30 + '%)';

  constructor() {}

  switchBgToZero() {
    this.valueBg = 'translate(' + -100 + '%)';
  }

  switchBgToFull() {
    this.valueBg = 'translate(' + 0 + '%)';
  }

}




