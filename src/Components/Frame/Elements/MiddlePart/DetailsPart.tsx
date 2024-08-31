import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Popover, Row } from "antd";
import { useAppContext } from "../../../../context";
import "./DetailsPart.css"; // Make sure this file includes your custom styles
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";

const DetailsPart = () => {
  const { menu } = useAppContext();

  return (
    <Row gutter={12} className="mt-2">
      <Col span={18}>
        <FormForDetails />
      </Col>
      <Col span={6}>
        <div
          onClick={() => {
            menu.setM_Item("Image");
          }}
          className="border border-dashed flex justify-center items-center p-2 flex-col rounded cursor-pointer"
        >
          <div className="p-1 border border-blue-600 rounded-full text-blue-500 flex justify-center items-center">
            <PlusOutlined style={{ fontSize: "10px" }} />
          </div>
          <div className="text-center">
            Upload <br /> Image
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default DetailsPart;

type Options = {
  label: string;
  placeholder: string;
  name: string;
};

const FormForDetails = () => {
  const { menu } = useAppContext();
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [custom, setCustom] = useState({
    label: "",
    placeholder: "",
    name: "",
    type: "plaintext" as "plaintext" | "phone" | "email" | "URL",
  });

  const initialFormFields: Options[] = [
    { label: "Full Name", placeholder: "Enter Full Name", name: "fullName" },
    { label: "Title", placeholder: "Title", name: "title" },
    { label: "Company", placeholder: "Company", name: "company" },
    { label: "Mobile", placeholder: "Mobile", name: "mobile" },
    { label: "Phone", placeholder: "Phone", name: "phone" },
    { label: "Website", placeholder: "Website", name: "website" },
    { label: "Address", placeholder: "Address", name: "address" },
    { label: "Email", placeholder: "Email", name: "email" },
  ];

  const formAddOptions: Options[] = [
    { label: "Fax", placeholder: "Fax", name: "fax" },
    { label: "Skype", placeholder: "Skype", name: "skype" },
    { label: "Hangout", placeholder: "Hangout", name: "hangout" },
    { label: "Zoom", placeholder: "Zoom", name: "zoom" },
    { label: "Meet", placeholder: "Meet", name: "meet" },
  ];

  const [formFields, setFormFields] = useState<Options[]>(initialFormFields);

  const handleContentPush = (option: Options) => {
    setFormFields([...formFields, option]);
  };

  const handleCustomModelOpen = () => {
    setModelOpen(true);
  };
  const handleCustomModelClose = () => {
    setModelOpen(false);
  };

  const content = (
    <>
      {formAddOptions.map((option, index) => (
        <p
          key={index}
          className="px-6 p-2 hover:bg-blue-500 hover:text-white cursor-pointer"
          onClick={() => {
            handleContentPush(option);
          }}
        >
          {option.label}
        </p>
      ))}
      <hr />
      <p
        key="custom"
        className="px-6 p-2 hover:bg-blue-500 hover:text-white cursor-pointer font-bold"
        onClick={handleCustomModelOpen}
      >
        Custom
      </p>
    </>
  );

  return (
    <>
      <h5 className="font-bold mb-4">Signature Details</h5>
      <Form layout="vertical">
        {formFields.map((field) => (
          <Form.Item key={field.name} className="floating-label">
            <Input placeholder=" " />
            <label>{field.label}</label>
          </Form.Item>
        ))}
      </Form>
      <Popover content={content} title="Select fields" trigger="click">
        <Button type="link" icon={<AddCircleOutlineIcon />}>
          Add a field
        </Button>
      </Popover>
      <Button
        type="link"
        icon={<AddCircleOutlineIcon />}
        onClick={() => {
          menu.setM_Item("Social");
        }}
      >
        Add social profiles
      </Button>
      <Modal
        centered
        open={modelOpen}
        onClose={handleCustomModelClose}
        onCancel={handleCustomModelClose}
        footer={[
          <Button
            type="primary"
            onClick={() => {
              handleContentPush(custom);
              handleCustomModelClose();
            }}
          >
            Add Custom Field
          </Button>,
        ]}
      >
        {/* Add your form content for the custom input type here */}
        <Form layout="vertical">
          <Form.Item label="Label">
            <Input
              value={custom.label}
              onChange={(e) => setCustom({ ...custom, label: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Placeholder">
            <Input
              value={custom.placeholder}
              onChange={(e) =>
                setCustom({ ...custom, placeholder: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Name">
            <Input
              value={custom.name}
              onChange={(e) => setCustom({ ...custom, name: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Type">
            <select
              value={custom.type}
              onChange={(e) =>
                setCustom({ ...custom, type: e.target.value as any })
              }
            >
              <option value="plaintext">Plaintext</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="URL">URL</option>
            </select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
