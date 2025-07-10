import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/Button";

export const Notes = () => {
  return (
    <PageLayout pageTitle="Notes">
      <textarea
        placeholder="Notes"
        className="textarea textarea-primary textarea-lg resize-none w-full h-80"
      />
      <Button>Save</Button>
    </PageLayout>
  );
};
