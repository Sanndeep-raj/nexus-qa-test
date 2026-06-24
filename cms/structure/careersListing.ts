import { TokenIcon } from '@sanity/icons'
import { ListItemBuilder } from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Careers Listing')
    .icon(TokenIcon)
    .schemaType('careersListing')
    .child(S.editor().title('Careers Listing').schemaType('careersListing').documentId('careersListing'))
)