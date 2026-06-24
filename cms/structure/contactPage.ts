import { PinIcon } from '@sanity/icons'
import { ListItemBuilder } from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Contact US')
    .icon(PinIcon)
    .schemaType('contactPage')
    .child(S.editor().title('Contact US').schemaType('contactPage').documentId('contactPage'))
)