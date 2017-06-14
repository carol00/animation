import {h} from './link'

export default props =>
<div class="input-display">
  <h2 class="title">Input</h2>
  <div class="row">
    <div class="col-12 col-tablet-4">
      <label class="col-12">input hover</label>
      <input class="col-12 h-entrance" text="text" placeholder="hover"/>
    </div>
    <div class="col-12 col-tablet-4">
      <label class="col-12">input focus</label>
      <input class="col-12 f-entrance" text="text" placeholder="focus"/>
    </div>
    <div class="col-12 col-tablet-4">
      <label class="col-12">input error</label>
      <input id="entrance-error" class="col-12 entrance-error" text="text" placeholder="error"/>
    </div>
  </div>
</div>
