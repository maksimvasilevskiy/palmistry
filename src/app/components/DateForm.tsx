"use client";
import Button from './ui/button';
import Input from './ui/input';
import useZodForm from '../hooks/useZodForm';
import { z } from 'zod';
import _ from 'lodash';

interface Props {
  defaultValues?: any;
  projects?: any[];
}

export const schema = z.object({
  id: z.string().optional(),
  year: z
    .number()
    .min(1924)
    .max(2024),
  month: z
    .number()
    .min(1)
    .max(12),
  day: z
    .number()
    .min(1)
    .max(31),
});

export default function DateForm({ projects }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isDirty },
  } = useZodForm({
    schema,
    mode: "all",
  });

  const onSubmit = handleSubmit((data) => {
    alert("Go to next step")
  });

  return (
    <form onSubmit={onSubmit} className="max-w-[400px] mx-auto">
      <div className="flex gap-3">
        <Input
          type="number"
          maxLength={4}
          placeholder="YYYY"
          name="year"
          register={register}
          errors={errors}
        />
        <Input
          type="number"
          maxLength={2}
          placeholder="MM"
          name="month"
          register={register}
          errors={errors}
        />
        <Input
          type="number"
          maxLength={2}
          placeholder="DD"
          name="day"
          register={register}
          errors={errors}
        />
      </div>
      <p className="text-red-500 text-xs mx-1 h-[20px]">
        {(Object.keys(errors).length > 0) && (
          'Date not found. Please check your details and try again.'
        )}
      </p>
      <Button type="submit" disabled={!isValid || !isDirty || isSubmitting}>
        Next
      </Button>
    </form>
  );
}
