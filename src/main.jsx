import {h} from './link'
import Combine from './combine'
import Transform from './transform'
import Animation from './animation'
import Color from './color'

export default props =>
<div class="wrap">
  <div class="content">
    <Combine />
    <Animation />
    <Transform />
  </div>
</div>
