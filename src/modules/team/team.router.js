import {Router} from "express";
import { auth } from '../../middleware/authMiddleware.js'
import * as teamController from "./controller/team.js";
import * as validators from "./team.validation.js"
import {validation} from "../../middleware/validation.js"
const router =Router();


router.get('/getTeams',teamController.getAllteams);
router.post('/addTeam',auth,validation(validators.addTeam),teamController.addTeam);
router.delete("/deleteTeam",auth,teamController.deleteTeam);

export default router;







