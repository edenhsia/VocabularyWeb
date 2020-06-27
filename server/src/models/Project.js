import mongoose, { Schema } from 'mongoose';
/**
 * project
 */
const projectSchema = new Schema({
  projectId: {
    type: String, trim: true, required: true, unique: true,
  },
  projectName: { type: String, trim: true, required: true },
});


const Project = mongoose.model('Project', projectSchema);

projectSchema.path('projectId').validate(
  (projectId) => Project.findOne({ projectId }).then((data) => data === null),
  'Project ID 已經存在',
);

export default Project;
