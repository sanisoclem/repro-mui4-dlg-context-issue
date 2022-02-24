import * as React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import { Button } from "@material-ui/core";
import Dialog from "material-ui/Dialog";

// Translated messages in French with matching IDs to what you declared
const messagesInFrench = {
  testMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
  btnMessage: "Le garçon et du pain",
};

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
      <FormattedMessage
        id="testMessage"
        defaultMessage="Today is {ts, date, ::yyyyMMdd}"
        values={{ ts: Date.now() }}
      />

      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        actions={[
          <Button variant="outlined">
            {/* commenting this out will cause the dialog to work */}
            <FormattedMessage
              id="btnMessage"
              defaultMessage="bread"
            />
            パンは最高
          </Button>
        ]}
        open={open}
        onClose={handleClose}
      >
        {/* commenting this out will cause the dialog to work */}
        <FormattedMessage
          id="testMessage"
          defaultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ ts: Date.now() }}
        />
      </Dialog>
    </IntlProvider>
  );
}
