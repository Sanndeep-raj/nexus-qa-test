import {HeartIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Life At Valoriz')
    .icon(HeartIcon)
    .schemaType('lifeAtValoriz')
    .child(S.editor().title('Life At Valoriz').schemaType('lifeAtValoriz').documentId('lifeAtValoriz'))
)