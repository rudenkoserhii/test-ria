import dotenv from 'dotenv';

import { app } from 'app';
import { Messages } from 'enums';
import { customLogger } from 'utils';

dotenv.config();

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  customLogger(`${Messages.connected} ${PORT}`);
});
