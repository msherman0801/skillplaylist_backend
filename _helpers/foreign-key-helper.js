module.exports = (model, id) => {

	return new Promise((resolve, reject) => {

		model.findOne({ _id: id }, (err, result) => {
			if (result) {
				return resolve(true);
			}
			else return reject(new Error(`FK Constraint 'checkObjectsExists' for '${id.toString()}' failed`));
		});
	});
};

// runValidators flag is necessary for typechecking in this case
// modelName.findOneAndUpdate({ _id: id }, { $set: setObject }, { new: true, runValidators: true });