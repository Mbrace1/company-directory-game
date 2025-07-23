import React, { useState } from 'react';
import InputField from '../generic/InputField';
import { type Person } from '../../util/types';

type Props = {
  type: 'add' | 'update';
  onSubmit: (data: Person) => void;
  initialData?: Person;
};

export default function PeopleForm({ type, onSubmit, initialData }: Props) {
  const [formData, setFormData] = useState<Person>(
    initialData || {
      id: 0,
      name: '',
      job: '',
      department_id: 1,
      salary: 20,
      email: "",
      manager_id: 1,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-4"
    >
      <InputField
        label="Name"
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Bob"
        required={true}
      />

      {/* this should be a search of similar job type*/}
      <InputField
        label="Job"
        id="job"
        name="job"
        type="text"
        value={formData.job}
        onChange={handleChange}
        placeholder="Engineer"
        required={true}
      />

      {/* this should be a dropdown of departments */}
      <InputField
        label="Department ID"
        id="department_id"
        name="department_id"
        type="text"
        value={formData.department_id}
        onChange={handleChange}
        placeholder="1"
        required={true}
      />

      {/* this should be a dropdown of managers */}
      <InputField
        label="Manager"
        id="manager_id"
        name="manager_id"
        type="text"
        value={formData.manager_id || ''}
        onChange={handleChange}
        placeholder="2"
        required={false}
      />

      <button
        type="submit"
        className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {type === 'add' ? 'Add Person' : 'Update Person'}
      </button>
    </form>
  );
}
