export class Pessoa{
    private name :string;
    private age: number;

    constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public getName(): string {
		return this.name;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public setName(value: string) {
		this.name = value;
	}

    /**
     * Getter $age
     * @return {number}
     */
	public getAge(): number {
		return this.age;
	}

    /**
     * Setter $age
     * @param {number} value
     */
	public setAage(value: number) {
		this.age = value;
	}
  


	
}