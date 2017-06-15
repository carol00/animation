import {h} from './link'

export default props =>
<div>
  <h3 class="subtitle">infinite</h3>
  <div class="row">
    <div class="col-4">
      <h4>tires</h4>
      <div class="rotate-tires">
        <div class="frame">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="shadow"></div>
      </div>
    </div>
    <div class="col-4">
      <h4>ghost</h4>
      <div class="float-ghost">
        <div class="body">
          <div class="eyes">
            <span></span><span></span>
          </div>
          <div class="hand">
            <span></span><span></span>
          </div>
        </div>
        <div class="foot">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  </div>
</div>
