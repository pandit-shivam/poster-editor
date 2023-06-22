import { IDesign } from "./DesignEditor";

const templateDesigns: IDesign[] = [
  {
    id: "1",
    name: "Design1",
    frame: { width: 400, height: 400 },
    type: "editorType",
    scenes: [],
    previews: [ {id: '110',src: 'https://cdn.dribbble.com/userupload/2764083/file/still-7a07c36c7bc20267fe4e02ced4236a5f.png?resize=400x0'}],
    metadata: {},
    published: false,
  },
  {
    id: "2",
    name: "Design2",
    frame: { width: 400, height: 400 },
    type: "editorType",
    scenes: [],
    previews: [{id: '110',src: 'https://cdn.dribbble.com/userupload/2764083/file/still-7a07c36c7bc20267fe4e02ced4236a5f.png?resize=400x0'}],
    metadata: {},
    published: false,
  },


]

export default  templateDesigns;