<<<<<<< HEAD
import { MoreVerticalIcon } from 'lucide-react'
import { useRef, useState } from 'react'
import {
  Button,
  Dialog,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  TableCell,
  TableRow,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from 'ui'
||||||| parent of c1e7536a0a (Refactor following types changes + remove app actions)
import { MoreVertical } from 'lucide-react'
import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  TableCell,
  TableRow,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from 'ui'
=======
import { TableCell, TableRow } from 'ui'
>>>>>>> c1e7536a0a (Refactor following types changes + remove app actions)

<<<<<<< HEAD
import { OAuthAppsMemberGrantsDialogContent } from './OAuthAppsMemberGrantsDialogContent'
||||||| parent of c1e7536a0a (Refactor following types changes + remove app actions)
import type { OAuthAppOverviewItem } from '@/data/oauth-apps/types'
=======
>>>>>>> c1e7536a0a (Refactor following types changes + remove app actions)
import type { OAuthApprovalItem } from '@/data/oauth-apps/types'

export interface OAuthAppsAuthorizedRowProps {
  app: OAuthApprovalItem
}

export const OAuthAppsAuthorizedRow = ({ app }: OAuthAppsAuthorizedRowProps) => {
<<<<<<< HEAD
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState<'grants' | 'revoke' | null>(null)
  const menuTriggerRef = useRef<HTMLButtonElement | null>(null)

||||||| parent of c1e7536a0a (Refactor following types changes + remove app actions)
export const OAuthAppsAuthorizedRow = ({
  app,
  canRevoke,
  onSelectViewGrants,
  onSelectRevoke,
}: OAuthAppsAuthorizedRowProps) => {
  const showRevoke = canRevoke && app.status === 'active'

=======
>>>>>>> c1e7536a0a (Refactor following types changes + remove app actions)
  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-x-3">
          <div
            className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-control bg-cover bg-center bg-no-repeat text-xs"
            style={{ backgroundImage: app.icon ? `url('${app.icon}')` : 'none' }}
          >
            {!!app.icon ? '' : app.name[0]}
          </div>
          <p className="min-w-0 truncate" title={app.name}>
            {app.name}
          </p>
        </div>
      </TableCell>
      <TableCell>{app.org_grant ? 'Organization' : 'Members'}</TableCell>
      <TableCell className="text-right">
        <Dialog
          open={isDialogOpen}
          onOpenChange={(open) => {
            setIsDialogOpen(open)
            // When users close the dialogs, we need to restore the focus on the menu button
            // Done in a setTimeout because the dialog tries to restore focus on the trigger despite onCloseAutoFocus being cancelled in the dialog contents
            setTimeout(() => {
              if (!open && menuTriggerRef.current) {
                menuTriggerRef.current.focus()
              }
            })
          }}
        >
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button
                    ref={menuTriggerRef}
                    icon={<MoreVerticalIcon />}
                    className="px-1"
                    aria-label="Manage app"
                    aria-describedby={undefined}
                  />
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>Manage app</TooltipContent>
            </Tooltip>
            <DropdownMenuContent align="end" side="bottom" className="w-40">
              <DialogTrigger asChild>
                <DropdownMenuItem onClick={() => setDialogContent('grants')}>
                  View grants
                </DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>
          {dialogContent === 'grants' && <OAuthAppsMemberGrantsDialogContent app={app} />}
        </Dialog>
      </TableCell>
    </TableRow>
  )
}
