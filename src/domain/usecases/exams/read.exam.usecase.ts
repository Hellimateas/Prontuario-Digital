import { ExamEntity } from "../../entities/exams/exams.entity";
import { IExamsRepository } from "../../repositories/exams.repository.interface";
import ExamRepository from "../../../adapters/repositories/exams.repository";
import { IUseCase } from "../usecase.interface";

class ReadExamUseCase implements IUseCase {
    constructor(private _repository: IExamsRepository) {
    }
    async execute(data: { idExams: number }): Promise<ExamEntity | undefined> {
        console.log(data)
        return await this._repository.readById(data.idExams);
    }
}

export default new ReadExamUseCase(
    ExamRepository
);