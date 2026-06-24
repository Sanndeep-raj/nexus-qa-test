import { SunIcon } from '@sanity/icons'
import { ListItemBuilder } from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Partners')
    .icon(SunIcon)
    .schemaType('ourPartnersPage')
    .child(S.editor().title('Our Partners').schemaType('ourPartnersPage').documentId('ourPartnersPage'))
)