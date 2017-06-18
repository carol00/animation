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
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
</div>
