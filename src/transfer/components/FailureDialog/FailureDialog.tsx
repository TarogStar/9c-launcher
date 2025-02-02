import { Button, Container, Dialog, styled, Typography } from "@material-ui/core";
import { T } from "@transifex/react";
import React from "react";


export type Props = {
  open: boolean;
  onDetailedView: () => void;
  onClose: () => void;
};

const DetailButton = styled(Button)({
  width: '234px',
  height: '60px',
  fontFamily: 'Montserrat',
  fontSize: '18px',
  textTransform: 'none',
  margin: '10px',
});

const BackToMainButton = styled(Button)({
  width: '234px',
  height: '60px',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  fontSize: '24px',
  textTransform: 'none',
  margin: '10px',
});

const FailureMessage = styled(Typography)({
  fontFamily: 'Montserrat',
  textAlign: 'center',
  padding: '10px',
  fontWeight: 'bold',
  fontSize: '32px',
  color: '#fff'
});

const SelectContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const transifexTags = "Transfer/Components/FailureDialog";

const FailureDialog: React.FC<Props> = (props: Props) => {
  const { open, onDetailedView, onClose } = props;

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      aria-labelledby="renew-dialog-title"
      open={open}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          maxWidth: '770px',
          height: '300px'
        },
      }}
    >
      <div>
        <FailureMessage>
          <T _str="Timeout" _tags={transifexTags} />
          <br />
          <T _str="There's possibility that the transfer will fail." _tags={transifexTags} />
        </FailureMessage>
        <SelectContainer>
          <BackToMainButton
            onClick={onClose}
            variant="contained"
            color="primary"
          >
            <T _str="Main" _tags={transifexTags} />
          </BackToMainButton>
          <DetailButton
            onClick={onDetailedView}
            variant="contained"
          >
            <T _str="Open Detailed View" _tags={transifexTags} />
          </DetailButton>
        </SelectContainer>
      </div>
    </Dialog>

  );
};

export default FailureDialog;
