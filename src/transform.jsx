import {h} from './link'

export default props =>
<div class="transform-display">
  <h2 class="title">Transform</h2>
  <h3 class="subtitle">rotate</h3>
  <span class="circle rotate-right">to right</span>
  <span class="circle rotate-right-v">right vertical</span>
  <span class="circle rotate-left">to left</span>
  <span class="circle rotate-left-v">left vertical</span>
  <h3 class="subtitle">skew</h3>
  <span class="circle skew-right">clockwise</span>
  <span class="circle skew-left">counterclockwise</span>
  <span class="circle skew-x-right">x-clockwise</span>
  <span class="circle skew-y-right">y-clockwise</span>
  <span class="circle skew-x-left">x-counterclockwise</span>
  <span class="circle skew-y-left">y-counterclockwise</span>
  <h3 class="subtitle">scale</h3>
  <span class="circle scale-zoom">zoom</span>
  <span class="circle scale-shrink">shrink</span>
  <span class="circle scale-x-zoom">x-zoom</span>
  <span class="circle scale-y-zoom">y-zoom</span>
  <span class="circle scale-x-shrink">x-shrink</span>
  <span class="circle scale-y-shrink">y-shrink</span>
  <h3 class="subtitle">translate</h3>
  <span class="circle go-up">go up</span>
  <span class="circle go-down">go down</span>
  <span class="circle forward">forward</span>
  <span class="circle backward">backward</span>
  <span class="circle go-top-right">top right</span>
  <span class="circle go-top-left">top left</span>
  <span class="circle go-bottom-right">bottom right</span>
  <span class="circle go-bottom-left">bottom left</span>
</div>
