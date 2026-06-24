import {DiamondIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Awards and Recognitions')
    .icon(DiamondIcon)
    .schemaType('awards')
    .child(S.editor().title('Awards and Recognitions').schemaType('awards').documentId('awards'))
)