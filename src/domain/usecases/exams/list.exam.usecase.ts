import { ExamEntity } from "../../entities/exams/exams.entity";
import { IExamsRepository } from "../../repositories/exams.repository.interface";
import ExamRepository from "../../../adapters/repositories/exams.repository";
import { IUseCase } from "../usecase.interface";

class ListExamUseCase implements IUseCase {
    constructor(private _repository: IExamsRepository) {
    }
    async execute(): Promise<ExamEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListExamUseCase(
    ExamRepository
);