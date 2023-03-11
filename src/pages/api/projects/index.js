import { projects } from "../../../data/projectsData";

export default function handler(_req, res) {
	return res.status(200).json(projects);
}
